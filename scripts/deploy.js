const deploy = async () => {
  //getSingners tiene la configuracion de nuestro deploy
  //deployer nos permite desplegar contratos inteligentes a la red que tenemos configurada
  const [deployer] = await ethers.getSigners();

  //deployer.address nos da la dirección de la cuenta que está deployando y nos trae la informacion que se necesitan
  console.log("Deploying contract with the account", deployer.address);

  //getContractFactory toma la informacion del cache de compilacion y nos trae la informacion que necesita para crear los metodos y luego desplegar el contrato
  //creamos una instancia del contrato deployado
  const PlatziPunks = await ethers.getContractFactory("PlatziPunks");

  //hacemos el deploy del contrato inteligente
  const deployed = await PlatziPunks.deploy(100);

  //deployed.address nos da la direccion donde se deploya el contrato
  console.log("Platzi Punks is deployed at: ", deployed.address);
};

//process.exit(0) significa cerrar el proceso de manera axitosa y process.exit(1) significa cerrar el proceso de manera erronea
deploy().then(() => process.exit(0)).catch(error => {
  console.log(error);
  process.exit(1);
});