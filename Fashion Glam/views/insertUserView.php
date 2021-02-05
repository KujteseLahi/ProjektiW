<?
include_once '../controller/userController.php';
if(isset($_POST['submitbtn'])){
$name = $_POST['name'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$view = new InsertView();
$view->InsertUser($name, $email, $username, $password);
}

class InsertView
{
    public function InsertUser($name, $email, $username, $password)
    {
        $controller = new StudentContrller();
      $response = $controller->InsertUser($name, $email, $username, $password);
        
      if($response){
          ?>
          <h1> U regjistrua me sukses</h1>
          <?php
      }else{
          ?> <h1>Nuk u regjistrua me sukses</h1>
          <?php
      }
    }
}
