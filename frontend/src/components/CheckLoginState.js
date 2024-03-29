export async function checkLoginState() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    else {
        return true;
    }
}