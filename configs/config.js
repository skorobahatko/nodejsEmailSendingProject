module.exports = {
    ACCESS_TOKEN_SECRET:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEwMTcxMDAsImV4cCI6MTYwMTAxNzE2MH0.HOehAb95USDh-M04gilRqICMwl5IcXmYiy3xyGrFiPc',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || '19ab4377e4ee241127fd6d3a407030a80ef3ae2b5837aa1449bac169813846547a3df8adc6aa8ad0d99250637e1874490956c635e67c046da79ae4c6a3c674fd7c',
    DB_NAME: process.env.DB_NAME || 'users',
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD:  process.env.DB_PASSWORD || 'root1'
};
