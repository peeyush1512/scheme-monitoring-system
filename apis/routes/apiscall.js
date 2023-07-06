const express = require('express');
let { query } =require('express');
require('dotenv').config();
const connection=require('../connection'); 
const router=express.Router(); 
var soap=require('soap');
// var convert = require('xml-js');
 

var url1 = 'https://sotto.cg.gov.in/websotto?wsdl';
var url2 = 'https://dkbssy.cg.nic.in/dashboard/wsmeetingplanner.asmx?wsdl';




//DKBSSY API
router.get('/dkbssy',(req, res)=> {
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.dkbbsy_details({},(error,result)=>{
        if(!error){
        
          return res.status(200).json(JSON.parse(result.dkbbsy_detailsResult));
        }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});


router.get('/dkbssydist',(req, res)=> {
  let body=req.body
  let returnobj=[];
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.dkbbsy_details({},(error,result)=>{
        if(!error){
          obj=JSON.parse(result.dkbbsy_detailsResult);
            for (const key in obj) {
              // console.log(obj[key].district_name);
              returnobj.push(obj[key].district_name);                
            } 
        console.log();
        return res.status(200).json(returnobj);
      }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});



router.post('/dkbssy',(req, res)=> {
  let body=req.body
  let returnobj=[];
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.dkbbsy_details({},(error,result)=>{
        if(!error){
          obj=JSON.parse(result.dkbbsy_detailsResult);
          if(body.year){
            for (const key in obj) {
              if (obj[key].district_name==body.distname && obj[key].yr== body.year){
                  returnobj.push(obj[key]);                
              }
            }
            if(returnobj.length<1){
              return res.status(200).json({message:"NO DATA MATCH"});
            } 
          }
          else{
            for (const key in obj) {
              if (obj[key].district_name==body.distname) {
                if(returnobj==null){
                  returnobj=obj[key];
                }
                else{
                  returnobj.push(obj[key]);
                }
                
              }
            }
          }
        return res.status(200).json(returnobj);
      }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});

 


//COVID INCENTIVE API
router.get('/covidincentive',(req, res)=> {
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.covid_incentive_details({},(error,result)=>{
        if(!error){
        
          return res.status(200).json(JSON.parse(result.covid_incentive_detailsResult));
        }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});




//DHS INCENTIVE API
router.get('/dhsincentive',(req, res)=> {
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.dhs_incentive_details({},(error,result)=>{
        if(!error){
        
          return res.status(200).json(JSON.parse(result.dhs_incentive_detailsResult));
        }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});




//DME INCENTIVE API
router.get('/dmeincentive',(req, res)=> {
  soap.createClient(url2, {},(err, client)=>{
    if(!err){
      client.dme_incentive_details({},(error,result)=>{
        if(!error){
        
          return res.status(200).json(JSON.parse(result.dme_incentive_detailsResult));
        }
        else{
          return res.status(400).json(error);
        }
      })
    }
    else{
      console.log(err);
    }
  }); 
});




 

//AYUSHMAAN API
router.get('/ayushmaan/:year',(req,res)=>{ 
    body=req.params.year
    soap.createClient(url2,{},(err,client)=>{    
      console.log(body,err);
      if(!err){ 
          client.ayushmaan_details({"year":body},(error,result)=>{
            console.log(result,error,result.ayushmaan_detailsResult);
            if(!error){
            return res.status(200).json(JSON.parse(result.ayushmaan_detailsResult));
          }
          else{  
            return res.status(400).json(error);
          }
        })   
      } 
      else{
        return res.status(400).json(err);
      }
    }) 
})  
 
router.get('/ayushmaan',(req,res)=>{ 
    body=req.body.year
    soap.createClient(url2,{},(err,client)=>{
      if(!err){ 
          client.ayushmaan_details(JSON.stringify({"year":body}),(error,result)=>{
          if(!error){
            return res.status(200).json(JSON.parse(result.ayushmaan_detailsResult));
          }
          else{
            return res.status(400).json(error);
          }
        })
      }
      else{
        return res.status(400).json(err);
      }
    })
})
 


 
//SOTTO API
router.get('/sotto',(req,res)=>{

  // soap.createClient(url1,{},(err,client)=>{
  //   if(!err){
  //     client.sotto_details({},(error,result)=>{
  //       if(!error){
  //         return res.status(200).json(JSON.parse(result.sotto_detailsResult));
  //       }
  //       else{
  //         return res.status(400).json(error);
  //       }
  //     })   
  //   }
  //   else{
  //     return res.status(400).json(err);
  //   }
  // })
  return res.json({message:"error"})
})

 
 
//claim summary by year 
router.get('/claimdetail',(req,res)=>{

  soap.createClient(url1,{},async (err,client)=>{
    if(!err){
     client.claims_details({},(error,result)=>{
        console.log(result);
        if(!error){
          return res.status(200).json(JSON.parse(result.claim_detailsResult));

        }else{
          console.log(error , result);
          return res.status(400).json(error);
        }        
      })
    }else{
      return res.status(400).json(err);
    }
  })
}) 


 






module.exports= router;










  // soap.createClient(url, {}, function(err, client) {
  //   console.log("step 2");
  //   // client.dkbbsy_details(function(err, result) {
  //     if(!err){
  //         console.log(client);
  //         console.log("step 3");
  //     }
  //     else{
  //       console.log(err);
  //       console.log("erro");
  //     }
  //  });
  // });

  // soap
  // .createClient(url)
  // .then((client) => console.log(client))
  // .catch((e) => console.log('eeeeeee', e));

