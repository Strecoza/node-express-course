const asyncWrapper = (fwrapper) => {
     return async (req, res, next) => {
        try{
            await fwrapper(req, res, next)
        } catch (error) {                
            next (error)
        }
     }
}

module.exports = asyncWrapper;