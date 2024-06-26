const mongoose = require("mongoose");
const { isEmail } = require("validator");

const customerSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: [true, "Please Enter First Name"],
      },
      middle: {
        type: String,
        required: false, // Middle name is optional
      },
      last: {
        type: String,
        required: [true, "Please Enter Last Name"],
      },
    },
    dateOfBirth: {
      day: {
        type: Number,
        required: [true, "Please Enter Day of Birth"],
        min: 1,
        max: 31,
      },
      month: {
        type: Number,
        required: [true, "Please Enter Month of Birth"],
        min: 1,
        max: 12,
      },
      year: {
        type: Number,
        required: [true, "Please Enter Year of Birth"],
      },
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
      lowercase: true,
    },
    emailVerified: {
      type: Boolean,
      default: false, // Default to false, indicating email is not verified
    },
    address: {
      flatName: {
        type: String,
        required: [true, "Please Enter Flat Name"],
      },
      subBuilding: {
        type: String,
      },
      flatNumber: {
        type: String,
        required: [true, "Please Enter Flat Number"],
      },
      street: {
        type: String,
        required: [true, "Please Enter Street"],
      },
      city: {
        type: String,
        required: [true, "Please Enter City"],
      },
      postalCode: {
        type: String,
        required: [true, "Please Enter Postal Code"],
      },
    },
    hasLivedLessThan6Months: {
      type: Boolean,
      required: [
        true,
        "Please specify if the customer has lived at the address for less than 6 months",
      ],
    },
    phoneNumber: {
      type: Number,
      // required: [true, "Please Enter Phone Number"],
      match: /^\d{10}$/,
    },
  },
  { timestamps: true }
);

const CustomerPersonelDetails = mongoose.model(
  "CustomerPersonelDetails",
  customerSchema
);

module.exports = CustomerPersonelDetails;
