const numberFormat = (value) =>
    new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR'
    }).format(value);

export default numberFormat