
<?php

class DBConnection{

private  $servername = 'DESKTOP-G35692C';
private $user = 'DesktopUser';

private $password = '123456';
private $databaseName = 'FashionGlam';

public function getConnection()
{
    
    try {
  
       $connection = new PDO("sqlsrv:Server= $this->servername ;Database= $this->databaseName", "$this->user", "$this->password");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
     /* if( $connection ) {
    
          echo "Connection is okay.<br />";
             
         }else{
             echo "Connection could not be established.<br />";
             die( print_r( sqlsrv_errors(), true));
         }      
       */ 
    } catch (PDOException $e) {
        echo $e->getMessage();
        return null;
    }
    return $connection;
}

}

?>


