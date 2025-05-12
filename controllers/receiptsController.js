
const sql = require('mssql')
const sqlConfig = require('../sqlConfig')
const { sendSuccess, sendError } = require('../utils/apiResponse')

const getReceipts = async (req,res)=>{
  try {
    if (isNaN(req.query.limit) || req.query.limit <= 0 || req.query.limit > 10) {
      return sendError(res, "Invalid 'limit'. Must be a positive number less than or equal to 10.", 400);
    }
      const pool = await sql.connect(sqlConfig);

      const result = await pool.request()
          .input('loyaltyid', req.query.loyaltyid || null)
          .input('limit', req.query.limit || 5)
          .input('nextToken', req.query.nextToken || null)
          .execute('dbo.getDigitalReceiptJson');

      // const receiptData = await Promise.all(
      //     result.recordset.map(async (element) => {
      //         const lineResult = await pool.request()
      //             .input('orderid', element.id)
      //             .execute('dbo.getDigitalReceiptLines');

      //         return {
      //             headerData: element,
      //             pluLines: lineResult.recordset
      //         };
      //     })
      // );
      const rawJson = result.recordset[0].jsonOutput;
      let parsedJson;      
      parsedJson= JSON.parse(rawJson);
      if (!parsedJson || parsedJson.length === 0) {
        return sendError(res, "Receipt not found.", 404);
      }
      //console.log(parsedJson);
      const finalResult = {
          result: parsedJson,
          nextToken: parsedJson[req.query.limit - 1]?.uniqueId || null
      };

      return sendSuccess(res,finalResult);

  } catch (err) {
      console.error(err);
      return sendError(res,'Internal server error');
  }
    
}

const postReceipts = (req,res)=>{
    res.status(201).json({message:"Post hello receipt"})
}

module.exports = {getReceipts,postReceipts}