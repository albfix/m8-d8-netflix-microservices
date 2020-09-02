const express = require("express")
const fileRouter = require("./routes/fileRouter")
require("dotenv").config()

const app = express()

app.use("/files", fileRouter)

app.listen(process.env.PORT || 4301, () => {
    console.log(`Attivo nella porta ${process.env.PORT || 4301}`)
})