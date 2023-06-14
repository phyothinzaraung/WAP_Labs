const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (err, address) => {

    if(err){
        console.error(`Error resolving domain: ${err.message}`);
        return;
    }

    console.log(`IP address for ${domainName}:`);
    address.forEach((address, index) => {
        console.log(`Address: ${address}`);
    });
});