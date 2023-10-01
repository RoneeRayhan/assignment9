// Controllers/userController.js
exports.create = async (req, res) => {
    try {
        // Your create logic here
        res.status(200).json({ status: 'success', data: 'Created' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.read = async (req, res) => {
    try {
        // Your read logic here
        res.status(200).json({ status: 'success', data: 'Read' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        // Your delete logic here
        res.status(200).json({ status: 'success', data: 'Deleted' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        // Your update logic here
        res.status(200).json({ status: 'success', data: 'Updated' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
