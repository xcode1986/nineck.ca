/**
 * Created by crossApp on 16/8/8.
 */


var viewAnimationTest_Index = 0
var ViewAnimationTest = ca.CAViewController.extend({
    

    ctor: function () {
        this._super();

    },
    viewDidLoad: function() {

        var bg = ca.CAImageView.createWithImage(ca.CAImage.create("image/1.jpg"));
        bg.setLayout(ca.DLayoutFill);
        this.getView().addSubview(bg);

        if (viewAnimationTest_Index == 0)
        {
            var imageView = ca.CAImageView.createWithLayout(ca.DLayoutZero);
            imageView.setImage(ca.CAImage.create("image/start.jpg"));
            this.getView().addSubview(imageView);

            var btn = ca.CAButton.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_NW_C(0.3, 0.5), ca.DVerticalLayout_B_H(120 ,60)), ca.CAButton.Type.RoundedRect);
            btn.setTitleForState(ca.CAControl.State.Normal, "Start Animation 1");
            this.getView().addSubview(btn);

            btn.addTarget(function () {

                imageView.setLayout(ca.DLayoutZero);
                imageView.setAlpha(0);

                ca.CAViewAnimation.beginAnimations("");
                ca.CAViewAnimation.setAnimationDuration(1.0);

                imageView.setLayout(ca.DLayoutFill);
                imageView.setAlpha(1.0);

                ca.CAViewAnimation.commitAnimations();

            }, ca.CAButton.Event.TouchUpInSide);
        }
        else if (viewAnimationTest_Index == 1)
        {
            var imageView = ca.CAImageView.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_W_C(270, 0.3), ca.DVerticalLayout_H_C(480, 0.4)));
            imageView.setImage(ca.CAImage.create("image/start.jpg"));
            this.getView().addSubview(imageView);

            var btn = ca.CAButton.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_NW_C(0.3, 0.5), ca.DVerticalLayout_B_H(120 ,60)), ca.CAButton.Type.RoundedRect);
            btn.setTitleForState(ca.CAControl.State.Normal, "Start Animation 2");
            this.getView().addSubview(btn);

            btn.addTarget(function () {

                imageView.setLayout(ca.DLayout.set(ca.DHorizontalLayout_W_C(270, 0.3), ca.DVerticalLayout_H_C(480, 0.4)));
                imageView.setRotationY(0);

                ca.CAViewAnimation.beginAnimations("");
                ca.CAViewAnimation.setAnimationDuration(1.0);

                imageView.setLayout(ca.DLayout.set(ca.DHorizontalLayout_W_C(270, 0.7), ca.DVerticalLayout_H_C(480, 0.4)));
                imageView.setRotationY(720);

                ca.CAViewAnimation.commitAnimations();

            }, ca.CAButton.Event.TouchUpInSide);
        }
        else if(viewAnimationTest_Index == 2)
        {
            var imageView = ca.CAImageView.createWithLayout(ca.DLayoutFill);
            imageView.setImage(ca.CAImage.create("image/start.jpg"));
            this.getView().addSubview(imageView);

            var btn = ca.CAButton.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_NW_C(0.3, 0.5), ca.DVerticalLayout_B_H(120 ,60)), ca.CAButton.Type.RoundedRect);
            btn.setTitleForState(ca.CAControl.State.Normal, "Start Animation 3");
            this.getView().addSubview(btn);

            var fillRect = ca.DRect.set(0, 0, imageView.getImage().getContentSize().width, imageView.getImage().getContentSize().height);

            var zeroRect = ca.DRect.set(0, 0, 0, imageView.getImage().getContentSize().height);

            btn.addTarget(function () {

                imageView.setLayout(ca.DLayoutFill);
                imageView.setImageRect(fillRect);

                ca.CAViewAnimation.beginAnimations("");
                ca.CAViewAnimation.setAnimationDuration(1.0);
                ca.CAViewAnimation.setAnimationRepeatAutoreverses(true);

                imageView.setLayout(ca.DLayout.set(ca.DHorizontalLayouttZero, ca.DVerticalLayoutFill));
                imageView.setImageRect(zeroRect);

                ca.CAViewAnimation.commitAnimations();

            }, ca.CAButton.Event.TouchUpInSide);
        }
        else
        {
            var imageView = ca.CAImageView.createWithLayout(ca.DLayoutFill);
            imageView.setImage(ca.CAImage.create("image/start.jpg"));
            this.getView().addSubview(imageView);

            var btn = ca.CAButton.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_NW_C(0.3, 0.5), ca.DVerticalLayout_B_H(120 ,60)), ca.CAButton.Type.RoundedRect);
            btn.setTitleForState(ca.CAControl.State.Normal, "Start Animation 4");
            this.getView().addSubview(btn);

            btn.addTarget(function () {

                imageView.setColor(ca.CAColor4B.set(0, 0, 0, 0));

                ca.CACustomAnimation.schedule(function(model){

                    var pro = model.now / model.total;

                    var a = pro * 1.0;
                    var b = Math.min(1.0, Math.max(pro * 3.0, 0));
                    var g = Math.min(1.0, Math.max(pro * 3.0 - 1.0, 0));
                    var r = Math.min(1.0, Math.max(pro * 3.0 - 2.0, 0));


                    imageView.setColor(ca.CAColor4B.set(r * 255, g * 255, b * 255, a * 255));

                }, "animation custom", 1.0);

            }, ca.CAButton.Event.TouchUpInSide);
        }

        var btn = ca.CAButton.createWithLayout(ca.DLayout.set(ca.DHorizontalLayout_NW_C(0.3,0.5), ca.DVerticalLayout_B_H(20 ,50)), ca.CAButton.Type.RoundedRect);
        btn.setTitleForState(ca.CAControl.State.Normal, "Switch Next");
        btn.addTarget(function (){

            viewAnimationTest_Index = viewAnimationTest_Index + 1;
            if (viewAnimationTest_Index > 3)
            {
                viewAnimationTest_Index = 0;
            }
            var viewController = new ViewAnimationTest();
            ca.rootWindow.getRootNavigationController().replaceViewController(viewController, false);
            viewController.release();

        }, ca.CAButton.Event.TouchUpInSide);
        this.getView().addSubview(btn);
    },
});
