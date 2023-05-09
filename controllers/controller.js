/** Get request */

const getQuestion = async (req, res) => {
    res.json("question api get request");
  };
  

    /** Post request */
    const insertQuestion = async(req,res) => {
        res.json("question api post request");
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