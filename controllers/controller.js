const  {Data, answer} = require("../database/data")
const Question = require("../model/questionSchema");
const Result = require("../model/resultSchema");


/** Get request */

const getQuestion = async (req, res) => {
    try {
       const q =await Question.find();
       res.json(q)
    } catch (error) {
       res.json({error}) 
    }
  };
  

    /** Post request */
    const insertQuestion = async(req,res) => {
       try {
        await Question.insertMany(Data.map((item, index) => ({
          questions: item,
          answer: answer[index]
        })));
          res.json({msg: "Data saved successfully"});
        }
        catch (error) {
        res.json({error})
        
        
       }
      };
      

          /** Delete request */
    const deleteQuestion = async(req,res) => {
      try {
        await Question.deleteMany();
        res.json({msg:"Data deleted successfully"});
        
      } catch (error) {
        res.json({error})
      }
      };

          /** Get result */
    const getResult = async(req,res) => {
        try {
         const r = await Result.find();
         res.json(r)
        } catch (error) {
          res.json(error)
        }
      };

   
                /** Update result */
    const updateResult = async(req,res) => {
       try {
         const {username, email, result, attempts, createdAt} = req.body;
         if (!username && !result) throw new Error("Data not provided");
         Result.create({username, email, result, attempts, createdAt});
         res.json({msg: "Result saved successfully"});
       } catch (error) {
        res.json(error)
       }
      };


                /** Post result */
    const deleteResult = async(req,res) => {
        try {
          await Result.deleteMany();
          res.json({msg: "Result deleted successfully"});
        } catch (error) {
          res.json({error})
        }
      };


      module.exports = {getQuestion,insertQuestion,deleteQuestion,getResult,updateResult,deleteResult};