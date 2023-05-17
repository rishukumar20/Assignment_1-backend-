const express = require('express');
const cors = require('cors');
const app = express();


const corsOptionsDelegate = (req,callback)=>{
    var corOptions
    corOptions = {origin:true}
   
    callback(null, corOptions);
}

exports.cors=cors();
exports.corsWithOptions=cors(corsOptionsDelegate);