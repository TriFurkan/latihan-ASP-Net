using System.Web;
using System.Web.Optimization;

namespace PelatihanASPNet_mvc_1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/Devjs").Include(
                      "~/Scripts/DevExpressJS/*.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));


            bundles.Add(new StyleBundle("~/Content/cssdev").Include(
                      "~/Content/DevExpressCS/*.css"));

            bundles.Add(new ScriptBundle("~/bundles/gridmodel1js").Include(
          "~/Scripts/grid_model1/*.js"));

            bundles.Add(new StyleBundle("~/bundles/gridmodel1css").Include(
          "~/Scripts/grid_model1/*.css"));

            bundles.Add(new ScriptBundle("~/bundles/gridmodel2js").Include(
          "~/Scripts/grid_model2/*.js"));

            bundles.Add(new StyleBundle("~/bundles/gridmodel2css").Include(
          "~/Scripts/grid_model2/*.css"));

        }
    }
}
