const fs = require("fs")
const AWS = require("aws-sdk")
const s3 = new AWS.S3({ region: "cn-northwest-1" });
const fileContent = fs.readFileSync('test.js');

// Setting up S3 upload parameters
const params = {
    Bucket: 'aitest',
    Key: 'lib/test.js', // File name you want to save as in S3
    Body: fileContent
};

// Uploading files to the bucket
s3.upload(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
});


