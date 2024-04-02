async function jsonValueKey(key, value) {
        const response = await fetch('json.json'); 
        const data = await response.json();
        
        //filtrage des données en fonction de la clé est de la valeur
        const filteredData = data.filter(item => item[key] === value);
        
        console.log(filteredData);
    } 


//ppell la fonction avec une clé et la valeur demander
jsonValueKey('city', 'Marseille');
