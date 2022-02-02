import { Router, Response, Request } from "express";
import * as express from 'express';
import Profile, { IProfile } from "../models/profile.model";
import auth from "../config/auth";
import jwt from "jsonwebtoken";

export class UserController {
    getAllPro = async (req: any, res: any) => {
        res.json({ status: 'Well done!!' });
    }

    createProfile = async (req: any, res: any) => {
        // Build profile object based on IProfile
        console.log("req.body", req.body);

        const profileFields = {
            // user: req.userId,
            firstName: req.body.firstName,
            username: req.body.firstName
        };
        try {
            // Create
            let profiles: any = new Profile(profileFields);
            let resUser = await profiles.save();
            const token: any = await jwt.sign({ id: resUser._id }, "jwtSecretToken");
            console.log(token);
            res.json({ status: 200, data: token });
        } catch (err) {
            console.error(err);
        }
    }

    getAllProfile = async (req: any, res: any) => {
        let resUser = await Profile.find();
        // console.log("resUser", resUser);
        res.json({ status: 200, "result": resUser });
    }

    getProfileById = async (req: any, res: any) => {
        let resUser = await Profile.findOne({_id:req.userId});
        // console.log("resUser", resUser);
        res.json({ status: 200, "result": resUser });
    }
  
}
