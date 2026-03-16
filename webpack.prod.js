import {merge} from "webpack-merge";
import common from "./webpack.common.js";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
     plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()]
    }
})