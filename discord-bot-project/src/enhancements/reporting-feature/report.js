const report = async (userId, reportReason) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const newReport = new Report({
            user: user._id,
            reason: reportReason,
            reportedAt: new Date()
        });

        await newReport.save();

        return 'Report submitted successfully';
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    report
};