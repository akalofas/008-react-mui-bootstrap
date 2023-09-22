function createData(id,HEID,HECODE,HENAME,HEACTIVE,HEWHOLESALESPRICE,HEMM,HEVAT) {
    return {
      id,HEID,HECODE,HENAME,HEACTIVE,HEWHOLESALESPRICE,HEMM,HEVAT
    };
  }
  
  const fakerows = [
    createData(1,1,'001','Cupcake', 1, 3.7, 67, 4.3),
    createData(2,2,'002','Donut', 1, 452, 25.0, 51, 4.9),
    createData(3,3,'003','Eclair', 1, 262, 16.0, 24, 6.0),
    createData(4,4,'004','Frozen yoghurt', 1, 159, 6.0, 24, 4.0),
    createData(5,5,'005','Gingerbread', 1, 356, 16.0, 49, 3.9),
    createData(6,6,'006','Honeycomb', 1, 408, 3.2, 87, 6.5),
    createData(7,7,'007','Ice cream sandwich', 1, 237, 9.0, 37, 4.3),
    createData(8,8,'008','Jelly Bean', 1, 375, 0.0, 94, 0.0),
    createData(9,9,'009','KitKat', 1, 518, 26.0, 65, 7.0),
    createData(10,10,'010','Lollipop', 1, 392, 0.2, 98, 0.0),
    createData(11,11,'011','Marshmallow', 1, 318, 0, 81, 2.0),
    createData(12,12,'012','Nougat', 1, 360, 19.0, 9, 37.0),
    createData(13,13,'013','Oreo', 1, 437, 18.0, 63, 4.0),
    createData(14,14,'014','Marshmallow2', 1, 318, 0, 81, 2.0),
    createData(15,15,'015','Nougat2', 1, 360, 19.0, 9, 37.0),
    createData(16,16,'016','Oreo2', 1, 437, 18.0, 63, 4.0),
    createData(17,17,'017','Lollipop', 1, 392, 0.2, 98, 0.0),
    createData(18,18,'018','Marshmallow', 1, 318, 0, 81, 2.0),
    createData(19,19,'019','Nougat', 1, 360, 19.0, 9, 37.0),
    createData(20,20,'020','Oreo', 1, 437, 18.0, 63, 4.0),
    createData(21,21,'021','Marshmallow2', 1, 318, 0, 81, 2.0),
    createData(22,22,'022','Nougat2', 1, 360, 19.0, 9, 37.0),
    createData(23,23,'023','Oreo2', 1, 437, 18.0, 63, 4.0),
  ];

export default fakerows;