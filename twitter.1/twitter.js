var module = angular.module('tweet', []);

module.controller('TweetCtrl', TweetCtrl);

function TweetCtrl() {
    var vm = this;
    this.tweeters = [{
        date: new Date(),
        tweet: 'this is a tweet',
        liked: false
    }];

    this.addTweet = function(tweet) {
        vm.tweeters.push({
            date: new Date(),
            tweet: tweet,
            liked: false
        });
        vm.newTweet ='';
    }
    
    vm.likeTweet = function (singleTweet) {
        singleTweet.liked = !singleTweet.liked;
    };
}
