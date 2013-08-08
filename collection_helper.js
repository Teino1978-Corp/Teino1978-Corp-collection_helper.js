var collection_helper = (function () {
                var collection = [],
                    $collection = $(collection),
                    inCollection = function (item) {
                        //debugger;
                        var index = -1,
                            iterator = 0,
                            total_iterator = $collection.length;

                        for (iterator; iterator < total_iterator; iterator++) {
                            if ($collection[iterator].id == item.id) {
                                index = iterator;
                            }
                        }
                        return index;
                    },
                    addToCollection = function (item) {
                        var indexOfItem = inCollection(item);

                        if (indexOfItem == -1) {
                            $collection.push(item);
                        }
                    },
                    removeFromCollection = function (item) {
                        var indexOfItem = inCollection(item);

                        if (indexOfItem != -1) {
                            $collection.splice(indexOfItem, 1);
                        }
                    },
                    clear = function () {
                        collection = [];
                        $collection = $(collection);
                    },
                    getCollection = function () {
                        return $collection;
                    };

                return {
                    inCollection: function (item) {
                        var in_collection = (inCollection(item) != -1) ? true : false;

                        return in_collection;
                    },
                    addToCollection: function (item) {
                        addToCollection(item);
                    },
                    removeFromCollection: function (item) {
                        removeFromCollection(item);
                    },
                    clear: function () {
                        clear();
                    },
                    getCollection: function () {
                        var collection = getCollection();

                        return collection;
                    }
                }
            }());