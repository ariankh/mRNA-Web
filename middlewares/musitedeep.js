//用户输入序列进行预测的入口文件，根据用户的输入生成各种参数，然后调用中间件processDP执行命令并返回结果
const fs = require( 'fs' );
//const processDP = require("processDP");
const exec = require('child_process').exec;
const path = require('path');

//创建文件夹
function mkdirsSync( dirname ) {
  if (fs.existsSync( dirname )) {
    //console.log(dirname+" exists return")
    return true
  } else {
    if (mkdirsSync( path.dirname(dirname)) ) {
      fs.mkdirSync( dirname )
      return true
    }
  }
}

let fn_cmd = async(ctx, next) => {
    let models = ctx.params.model;
    let seqs = ctx.params.seqs
	console.log(models)
    //let models = [{label: "Phosphorylation (S,T)", value:"Phosphoserine_Phosphothreonine"}];
    //
    //  //console.log(models)
    //  let model = models[0].value;
    //  //console.log(model)
    //  for(let i=1;i<models.length;i++)
    //  {
    //      model+=";"+models[i].value;
    //  }
    //  let data = ctx.request.body.input;
	//  let userId = ctx.request.body.userId;
	//  let time = ctx.request.body.time;
    //  let seqNum = ctx.request.body.seqNum;
    //  let inputFile = "input.fasta";
    //  let numName = "seq_num.txt";
    //  let outputprefix = "prediction";
    //  let outputFile = outputprefix + '_results.txt';
    //  let stateFile = outputprefix+'_predicted_num.txt';
    // // console.log(time)
    //  let modelOptions = {'models':models};
	//  //musitedeepcapsnet 注意这里的特殊字符` 不是 ' 
    //  let mkdirResult = mkdirsSync(`users/upload-files/${userId}/${time}`);
    //  let inputFileUrl = `users/upload-files/${userId}/${time}/${inputFile}`;
	//  let outputFileUrl = `users/upload-files/${userId}/${time}/${outputFile}`;
    //  fs.writeFileSync(`users/upload-files/${userId}/${time}/${inputFile}`, data);
    //  fs.writeFileSync(`users/upload-files/${userId}/${time}/${stateFile}`, "Start:0");
    //  fs.writeFileSync('users/upload-files/'+userId+"/"+time+"/modelOptions.json", JSON.stringify(modelOptions));
    //  fs.writeFileSync(`users/upload-files/${userId}/${time}/${numName}`, seqNum);
    //  //console.log("save modelOptions into files");
    //  let cmdStr = `python3 MusiteDeep/predict_multi_batch.py -input ${inputFileUrl} -output users/upload-files/${userId}/${time}/${outputprefix} -model-prefix "MusiteDeep/models/${model}"`
	//  //console.log(cmdStr);
    //  let result = await processDP(cmdStr, inputFileUrl, outputFileUrl);
    //  //fs.writeFileSync('static/visitors/processed_protein_record.txt', num_protein+"\n"+num_sites);
	//  //ctx.response.body = await result;
    ctx.response.body = [{"4":"Phosphoserine:0.823","24":"Phosphoserine:0.423"}]

}

function musitedeep(url, maxAge){
	return async (ctx, next) => {
		await fn_cmd();
	}
}

module.exports =  musitedeep