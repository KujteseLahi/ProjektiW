<?php
include_once '../models/studentMapper.php';
include_once '../models/userModel.php';

class UserController{
    public function InsertUser(){
        //insert useri ne db
        $user = new User($UserName, $UserEmail, $UserUsername, $UserPassword);
        $userMapper = new UserMapper($user);
        $userMapper->Insert($UserName, $UserEmail, $UserUsername, $UserPassword);
        return true;
              //insert kursin studenti

    }
}
?>