<script context="module">
    export async function db(method,endpoint) {
        // var credentials = btoa('5YrHY5o6pn:N:N7V]V1li^r"jL');
        // var auth = { "Authorization" : `Basic ${credentials}` };
        // return auth;
        // const res = await fetch(endpoint, { headers : auth });
        // let data = await res.json();
        // return data;
            // fetch(endpoint)
            // .then((response) => response.json())
            // .then((data) => {return data});
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
            });

            xhr.open("GET", endpoint);
            xhr.setRequestHeader("Authorization", "Basic NVlySFk1bzZwbjpOOk43Vl1WMWxpXnIiakw=");
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

            xhr.send();
    }    
</script>