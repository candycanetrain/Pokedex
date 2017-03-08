# json.extract! @gifts, :description, :title, :guest

json.partial! 'gift', gift: @gift
