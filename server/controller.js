module.exports = {
    getHouses: (req,res) => {
        // res.status(200).send("Get Houses Endpoint Worked!")

        const dbInstance = req.app.get("db");

        dbInstance.get_houses().then( houses => {
            res.status(200).json( houses )
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in GETHOUSES"});
        console.log("ERROR------->", error);
        })
    },

    createHouse: (req, res) => {
        // res.status(200).send("Create House Endpoint Worked!")

        const dbInstance = req.app.get("db");

        const { name, address, city, state, zip } = req.body.house;

        dbInstance.create_house( [name, address, city, state, zip] ).then( () => {
            res.status(200).json()
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in CREATE HOUSE"});
        console.log("ERROR------->", error);
        })
    },

    deleteHouse: (req, res) => {
        // res.status(200).send("Delete House Endpoint Worked");
        const dbInstance = req.app.get("db");

        const { id } = req.params;
        
        dbInstance.delete_house( id ).then( house => {
            res.status(200).json()
        }).catch(error => { 
            res.status(500).send({errorMessage: "Something went wrong in CREATE HOUSE"});
        console.log("ERROR------->", error);
        })
    }

}