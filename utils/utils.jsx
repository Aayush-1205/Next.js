'use server'
import fs from 'fs/promises';

export const submitAction = async (e) => {
    console.log(`Name: ${e.get("name")}, Message: ${e.get("message")}`);
    fs.writeFile('user.txt', `Name: ${e.get("name")}, Message: ${e.get("message")}`)
};
