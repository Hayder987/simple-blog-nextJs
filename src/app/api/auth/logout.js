export default async function logoutHandler(req, res) {
    const logoutURL = `${process.env.KINDE_ISSUER_URL}/logout?redirect_uri=${process.env.KINDE_POST_LOGOUT_REDIRECT_URL}`;
  
    // Redirect user to Kinde logout page
    res.writeHead(302, { Location: logoutURL });
    res.end();
  }
  