const { Client } = require('pg');

// Datos de conexión con Supabase
const client = new Client({
    host: 'aws-0-sa-east-1.pooler.supabase.com', 
    port: 5432,                                  
    user: 'postgres.tdxpgpcxqhdzanzvniht',        
    password: 'k7uARMxtf0qyJ9m3',                   
    database: 'postgres',                        
    ssl: {
        rejectUnauthorized: false                
    }
});

client.connect((error) => {
    if (error) {
        console.log('Error conectando con la base de datos:', error);
        return;
    } else {
        console.log('Conectado con la base de datos de Supabase');
    }
});

module.exports = client;


