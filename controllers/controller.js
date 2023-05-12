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
        await Question.insertMany([{questions:[0], answer:[1]}]);
          res.json({msg: "Data saved successfully"});
        }
        catch (error) {
        res.json({error})
        
       }
      };
      

          /** Delete request */
    const deleteQuestion = async(req,res) => {
        res.json("question api delete request");
      };

          /** Get result */
    const getResult = async(req,res) => {
        res.json("result api get request");
      };

   
                /** Update result */
    const updateResult = async(req,res) => {
        res.json("result api update request");
      };


                /** Post result */
    const deleteResult = async(req,res) => {
        res.json("result api delete request");
      };


      module.exports = {getQuestion,insertQuestion,deleteQuestion,getResult,updateResult,deleteResult};