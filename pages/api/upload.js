import fs from "fs";
import ibm from "ibm-cos-sdk";
import formidable from "formidable";

const credentials = {
  endpoint: process.env.BUCKET_PUBLIC_ENDPOINT,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
};

const cos = new ibm.S3(credentials);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable();

  form.parse(req, async (err, fields, files) => {
    if (!files.theFile) {
      res.status(400).send("No file uploaded");
      return;
    }

    try {
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: files.theFile.originalFilename,
        Body: fs.createReadStream(files.theFile.filepath),
      };

      await cos.putObject(params).promise();

      return res.status(201).send("File uploaded");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error uploading file");
    }
  });
}
