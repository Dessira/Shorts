const express = require('express');
const { User, Short, Journal } = require('../models');

const router = express.Router();
router.get("/", async (req, res) => {
    console.log("Hello World")
    res.json({"stat": "OK"})
})
// get all users
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
      console.log(users)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // get a specific user by ID
  router.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // create a new user
  router.post('/create-user', async (req, res) => {
    try {
        console.log(res.body)
      const {firstName, lastName, email, password} = req.body;
      const salt = "hasta"
      const user = new User({firstName, lastName, email, password, salt}) 
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // Validate login
  router.post('/sign-in', async (req, res) =>{
    try{
        const {email, password} = req.body
        // query user based on email
        const user = await User.findOne({email});
        console.log(req.body);
        if (user){
            //const hashed_password = hashFunc(password)
            if (user.password == password){
                const {email, firstName, lastName, _id} = user
                const token = 109388378828
                res.json({email, firstName, lastName, _id, token})
            }
            else{
                res.json({"token": -1})
            }
        }
    }catch(error) {
        res.status(500).json({ error: error.message})
    }
  })
  
  // update an existing user
  router.patch('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // delete a user by ID
  router.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // get all shorts
  router.get('/shorts', async (req, res) => {
    try {
      const shorts = await Short.find();
      res.json(shorts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // get a specific short by ID
  router.get('/short/:id', async (req, res) => {
    try {
      const short = await Short.findById(req.params.id);
      if (!short) {
        return res.status(404).json({ error: 'Short not found' });
      }
      res.json(short);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });
  
  // get all user or journal shorts
  router.get('/shorts/:id', async (req, res) => {
    console.log("in here")
    try{
        const shorts = await Short.findById(req.params.id);
        if (!shorts){
            return res.status(404).json({error: 'shorts not found'});
        }
        res.json(shorts);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  router.get('/journal-short/:id', async (req, res) => {
    try{
      //console.log(req.params.id)
        const shorts = await Short.find({"journal": req.params.id});
        if (!shorts){
          console.log("valid")
            return res.status(404).json({error: 'shorts not found'});
        }
        res.json(shorts);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  // create a new short
  router.post('/new-short', async (req, res) => {
    try {
      const {user, name, content, journal} = req.body
      const short = new Short({user, name, content, journal});
      console.log(req.body)
      await short.save();

      res.json(short);
    } catch (error) {
      console.log("work!!!!")
      res.status(500).json({ error: error.message });
    }
  });
  // update an existing short
  router.patch('/short/:id', async (req, res) => {
    try {
      const short = await Short.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!short) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(short);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // get all user journals
  router.get('/journal/:id', async (req, res) => {
    try{
        const journal = await Journal.find({"user": req.params.id});
        console.log("request recieved")
        if (!journal) {
          return res.status(404).json({ error: 'journal not found' });
        }
        res.json(journal)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  // get by journal id
  router.get('/journalbyid/:id', async (req, res) => {
    try{
      console.log(req.params.id)
        const journal = await Journal.findById(req.params.id);
        console.log(journal)
        if (!journal) {
          return res.status(404).json({ error: 'journal not found' });
        }
        res.json(journal)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  // get all journals
  // create a new journal
  router.post('/create-journal/', async (req, res) => {
    try{
      console.log(req.body.user)

        const journal = new Journal(req.body)
        await journal.save()
        res.json(journal);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  // update an existing journal
  router.patch('/journal/:id', async (req, res) => {
    try {
      const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!Journal) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(journal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // delete an existing journal
  router.delete('/journal/:id', async (req, res) => {
    try {
      const journal = await Journal.findByIdAndDelete(req.params.id);
      if (!journal) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(journal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // get a journal by id
  router.get('/journal/:id', async (req, res) => {
    try{
        const journal = await Journal.findById(req.params.id);
        if (!journal){
            return res.status(404).json({error: 'shorts not found'});
        }
        res.json(journal);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
  })
  // like a short 
  router.post("/likes/short/:id", async (req, res) =>{
    try{
        const short = await Short.findById(req.params.id);
        short.likes +=1
        short.save()
        res.json({"task": "done"})

    }catch (error) {
        res.status(500).json({error: error.message});
    }
  });
      module.exports = router;