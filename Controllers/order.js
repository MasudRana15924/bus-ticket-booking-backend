const bookingModel=require('../models/Order');
const BusModel =require('../models/Bus')

// Create new Order
exports.newOrder =async (req, res, next) => {
 
    const {
      name,
      email,
      phone,
      busname,
      price,
      quantity,
      image,
      busId
    } = req.body;
  
    const booking = await bookingModel.create({
      name,
      email,
      phone,
      busname,
      price,
      quantity,
      image,
      busId,
      paidAt: Date.now(),
      user: req.user._id,
    });
    if(booking){
      await updateStock(busId,quantity);
    }
    res.status(201).json({
      success: true,
      booking,
    });
  

}

async function updateStock(id, quantity) {
    const bus = await BusModel.findById(id);
    // if(bus.quantity>0){
    //   bus.seats -= quantity;
    // }
    bus.seats -= quantity;
    await bus.save({ validateBeforeSave: false });
}

