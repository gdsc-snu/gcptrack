import axios from 'axios';

export async function validateUserInfo(token: any) {
    try {
        const response = await axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token.accessToken}`,
                {
                    headers: {
                        Authorization: `Bearer ${token.tokenId}`,
                    },
                },
            );
        const googleUser = await response.data;
        return googleUser;
    } catch (error) {
        console.error(error)
    }
}