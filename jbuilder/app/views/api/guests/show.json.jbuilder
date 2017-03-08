# json.extract! @guest, :name, :age, :favorite_color, :gifts, :parties, :invitations

json.partial! 'guest', guest: @guest
json.gifts @guest.gifts
