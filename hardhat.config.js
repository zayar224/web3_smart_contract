require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');


module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/USBYOzxVqbo9jO4d2NcriziYSxsneceH',
      accounts: ['fcb3e224d9f0fdde517acf6c338e082816e2b156b752eef3f9957c151d382c75']
    }
  }
};
