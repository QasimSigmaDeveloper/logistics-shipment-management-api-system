const generateTrackingId = ():string =>{
    const random = Math.floor(
        100000 + Math.random() + 900000
    )
    return `TBS-${Date.now()}-${random}`;
}

export default generateTrackingId;