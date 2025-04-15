
const getReceipts = (req,res)=>{
    res.status(200).json({message:"Get hello receipt"})
}

const postReceipts = (req,res)=>{
    res.status(201).json({message:"Post hello receipt"})
}

module.exports = {getReceipts,postReceipts};