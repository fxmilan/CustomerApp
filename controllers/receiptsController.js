
const getReceipts = (req,res)=>{
    const apikey = req.header('x-api-key');
    console.log(apikey)
    if (apikey == process.env.APIKEY) {
        res.status(200).json({message:"Get hello receipt"})
      } else {
        res.status(401).send('unauthorized');
      }
    
}

const postReceipts = (req,res)=>{
    res.status(201).json({message:"Post hello receipt"})
}

module.exports = {getReceipts,postReceipts};