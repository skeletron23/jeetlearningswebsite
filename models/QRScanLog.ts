import mongoose from 'mongoose';

const QRScanLogSchema = new mongoose.Schema({
    campaignId: { type: String, required: true },
    qrCodeId: String,
    ip: String,
    userAgent: String,
    deviceType: String,
    location: {
        city: String,
        country: String
    },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.QRScanLog || mongoose.model('QRScanLog', QRScanLogSchema);
