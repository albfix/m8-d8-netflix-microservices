const express = require("express")

const app = express()

app.listen(process.env.PORT || 4301, () => {
    console.log(`Attivo nella porta ${process.env.PORT || 4301}`)
})