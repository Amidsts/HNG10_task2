const person = require("../models/person.model")
const {
    createtPersonValidate
} = require("../validators/person.validation")

const {Router} = require("express")

const router = Router()


router.post("/", async (req, res) => {

    try {
        const {
            name,
            email,
            password
        } = req.body
    
        const newPerson = await new person(
            createtPersonValidate(req.body)
        ).save()

        res.status(200).json({
            data: newPerson
        })

    } catch (err) {

        res.send(err.message)
    }
})

router.get("/:user_id", async (req, res) => {

    try {
        const user = await person.findOne({
            _id: req.params.user_id
        })

        if (!user) throw new Error("This user does not exist")

        res.status(200).json({
            data: user
        })

    } catch (err) {

        res.send(err.message)
    }
})


router.put("/:user_id", async (req, res) => {

    try {

        const user = await person.findOne({
            _id: req.params.user_id
        })

        if (!user) throw new Error("This user does not exist")

        const {
            name,
            email,
            password
        } = req.body
    
        createtPersonValidate(req.body)

        await user.updateOne({
            name,
            email,
            password
        })
        
        await user.save()

        res.status(200).json({
            data: "user data has been updated successfully"
        })
    } catch (err) {

        res.send(err.message)
    }
})

router.delete("/:user_id", async (req, res) => {

    try {
        
        const user = await person.findOne({
            _id: req.params.user_id
        })

        if (!user) throw new Error("This user does not exist")

        await person.deleteOne({ _id: req.params.user_id })

        res.status(200).json({
            data: "This user has been deleted successfully"
        })

    } catch (err) {

        res.send(err.message)
    }
})

module.exports = router