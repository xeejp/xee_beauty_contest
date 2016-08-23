defmodule Beauty.Host do
  alias Beauty.Main
  alias Beauty.Actions

  # Actions
  def fetch_contents(data) do
    data
    |> Actions.update_host_contents()
  end

  def change_page(data, page) do
    if page in Main.pages do
      %{data | page: page}
      |> Actions.change_page(page)
    else
      data
    end
  end
 
  def set_data(data) do
    data = data |>Map.put(:participants,Enum.into(Enum.map(data.participants, fn { id, _} ->
       {id,
          %{
	      active: data.participants[id].active,
	      number: 0,
	      inputed: false,
	  }
       }
    end), %{}))
    
    data = data 
           |>put_in([:inputs],0)
	   |>put_in([:sum],0)
    data
    |> Actions.set_data()
  end

  def all_reset(data) do
    data = data |>Map.put(:participants,Enum.into(Enum.map(data.participants, fn { id, _} ->
       {id,
          %{
	      active: true,
	      number: 0,
	      inputed: false,
	  }
       }
    end), %{}))
    
    data = data 
           |>put_in([:inputs],0)
	   |>put_in([:actives],Map.size(data.participants))
	   |>put_in([:sum],0)
    data
    |> Actions.all_reset()
  end


# Utilities
  def format_contents(data) do
    data
  end
end
