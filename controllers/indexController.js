const express = require('express');
const path = require('path');

exports.getHtml = function (req, res, next) {
    res.render('index');
}