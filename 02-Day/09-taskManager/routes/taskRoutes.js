var express = require('express');
var router = express.Router();

var taskList = [
    {id : 1, name : "Master JavaScript", isCompleted : false},
    {id : 2, name : "Attend Node.js training", isCompleted : true},
    {id : 3, name : "Become a better developer", isCompleted : false}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', { list : taskList });
});

router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

router.post('/new', function(req, res, next){
    var newTaskId = taskList.reduce(function(result, task){
        return result > task.id ? result : task.id
    },0) + 1;
    var newTask = {
        id : newTaskId,
        name : req.body.newTaskName,
        isCompleted : false
    };
    taskList.push(newTask);
    res.redirect('/tasks');
});

router.get("/toggle/:id", function(req, res, next){
    var taskId = parseInt(req.params.id);
    var task = taskList.filter(function(t){
        return t.id === taskId;
    })[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});

router.get('/api/list', function(req, res, next){
    res.json({ list : taskList });
});

module.exports = router;
