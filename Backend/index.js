const express = require('express')
const router = require('./routes/router')
const path = require('path');
const cors = require('cors')

const mongoose = require('mongoose')

const multer = require('multer')
const bodyParser = require('body-parser');
const { type } = require('os');


const server = express()


server.use(express.json())

server.use(cors({
    origin: 'http://localhost:5173', // Allow only frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable if you need to include cookies or authorization headers
    allowedHeaders: 'Content-Type, Authorization'
}));

// Serve static images with explicit route
server.use('/images', express.static(path.join(__dirname, 'images')));

server.use(cors())

server.use(bodyParser.json()); // Parse JSON bodies
server.use(bodyParser.urlencoded({ extended: true }));

server.use(router)

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/hospital')
    console.log('db connected');
}


const userSchema = new mongoose.Schema({
    pname: String,
    dob: String,
    department: String,
    date: String,    // data type for date is Date
    email: String,
    drname: String,
    time: String,
    number: String  //data type for number is Number
})

const Appointments = mongoose.model('Appointments', userSchema)


//schema for signin people

const seconduserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Signin = mongoose.model('Signin', seconduserSchema)


//schema for doctors



const doctorsSchema = new mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    gender: String,
    department: String,
    address: String,
    email: String,
    phone: Number


})


const Doctors = mongoose.model('Doctors', doctorsSchema)


//contact schema

const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const Contact=mongoose.model('Contact',contactSchema)



// employee schema


const employeeschema=new mongoose.Schema({
  id:Number,
  name:String,
  email:String,
  Contact:String,
  joindate:String,
  role:String,
  salary:String,

})



const Employee=mongoose.model('Employee',employeeschema)



server.post('/appointmentdata', async (req, res) => {

    let appdata = new Appointments()

    appdata.pname = req.body.data.pname;
    appdata.dob = req.body.data.dob;
    appdata.department = req.body.data.department;
    appdata.date = req.body.data.date;
    appdata.email = req.body.data.email;
    appdata.drname = req.body.data.drname;
    appdata.time = req.body.data.time;
    appdata.number = req.body.data.number;

    const doc = await appdata.save();

    console.log(doc);
    console.log(req.body);

    console.log(req.body.data.pname);
    console.log(appdata.pname);


    res.json(doc)
})

// API endpoint to get data
server.get('/getapi', async (req, res) => {
    try {
        const data = await Appointments.find();
        res.json(data)

    }
    catch (err) {
        res.status(500).send(err)
    }
})

server.post('/delete/:id', async (req, res) => {
    try {
        let itemid = req.params.id
        await Appointments.deleteOne({ _id: itemid })
        console.log(req.params.id);
    }

    catch (err) {
        console.log(err);
    }
})

server.post('/edit/:id', async (req, res) => {
    try {
        let id = req.params.id
        const updatedData = req.body

        const newData = await Appointments.updateOne(
            { _id: id },
            {
                $set: updatedData.data
            }

        )
        res.status(200).json(newData)
    }
    catch (error) {
        res.status(400).json("bad request")
    }

})


server.get('/OKsignin/:name/:email/:password', async (req, res) => {
    try {

        let email = req.params.email
        let name = req.params.name
        let password = req.params.password
        console.log(email, name, password);

        let signindata = new Signin()

        signindata.name = name
        signindata.email = email
        signindata.password = password


        const sdata = await signindata.save()


        res.status(200).send("Verification successful");
    }

    catch (error) {
        console.error("Error occurred during verification:", error);
        res.status(500).send("Failed to verify user");
    }

})

server.post('/signout', async (req, res) => {
    console.log(req.body);


    try {
        await Signin.deleteOne({ password: req.body.password })

        return res.status(200).json()
    }
    catch (err) {
        console.error('Error occurred during sign out:', err);
    }
})


server.get('/doctorapi', async (req, res) => {
    const data = await Doctors.find()
    res.json(data)


})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
   
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 } // 50 MB in bytes
})


server.post('/adddoctor', upload.single('image'), async (req, res) => {

    let doctor = new Doctors()

    doctor.name = req.body.name
    doctor.gender = req.body.gender
    doctor.department = req.body.department
    doctor.address = req.body.address
    doctor.email = req.body.email
    doctor.phone = req.body.phone
   /*  doctor.image = req.body.image */

    // Check if file uploaded successfully
    if (req.file) {
        doctor.image = req.file.filename; // Assuming you're saving the filename to the database
    } else {
        doctor.image = ""; // Or provide a default value
    }
    await doctor.save()

    
    return  res.status(200).json()

})

server.post('/contact',async(req,res)=>{
 
    let contactdata=new Contact()

    contactdata.name=req.body.name
    contactdata.email=req.body.email
    contactdata.message=req.body.message

   await contactdata.save()
  return res.status(200).json()
})

server.post('/deleteDoctor/:id', async (req, res) => {
    let id = req.params.id
    await Doctors.deleteOne({ _id: id })
})

server.post('/employeedata',async(req,res)=>{


    let employee=new Employee()
    employee.name=req.body.data.ename
    employee.email=req.body.data.email
    employee.Contact=req.body.data.contact
    employee.role=req.body.data.role
    employee.joindate=req.body.data.joiningdate
    employee.salary=req.body.data.salary

   await employee.save()
   res.status(200).send({ message: 'Employee data saved successfully' });
})

server.get('/getemployee',async(req,res)=>{
   
    const data=await Employee.find()
    res.json(data)
    
})


server.post('/delemployee/:id',async(req,res)=>{
    let id=req.params.id
  await Employee.deleteOne({_id:id})

})

server.post('/edit_employee/:id',async(req,res)=>{
    try {
        let id = req.params.id
        const updatedData = req.body

        const newData = await Employee.updateOne(
            { _id: id },
            {
                $set: updatedData.data
            }

        )
        res.status(200).json(newData)
    }
    catch (error) {
        res.status(400).json("bad request")
    }

})
const port =  8001;
server.listen(port, (err) => {
    if (err) throw err
    console.log('server is running on port:' + port);
})