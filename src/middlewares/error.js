const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error.errorCode) {
      console.log("捕获到异常");
      return (ctx.body = errror.msg);
    }
  }
};
module.exports = catchError;
