const express = require("express")
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob")
require("dotenv").config()

const credentials = new StorageSharedKeyCredential("netflixmicroservices", process.env.STORAGE_KEY)
const blobClient = new BlobServiceClient("http://netflixmicroservices.blob.core.windows.net/", credentials)

const router = express.Router()

router.get("/", async (req, res) => {
    const containers = await blobClient.listContainers()
    const toReturn = []
    for await (const container of containers)
        toReturn.push(container.name)
    res.send(toReturn)
})

module.exports = router