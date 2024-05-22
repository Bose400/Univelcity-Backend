npm init -y
npm install express
npm install nodemon
npm install mongodb
npm install mongoose

mongoose.connect("mongodb+srv://mishakmanuel:ROcA1kUfF4w9pwbs@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connections established")
}).catch(()=>{
    console.log("Connetion failed");
});